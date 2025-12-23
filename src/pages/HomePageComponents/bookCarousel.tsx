import { useState, useEffect } from 'react';
import './bookCarousel.css';
import booksList from '../../assets/books.json';

// Book type definition
interface Book {
  title: string;
  author: string;
  image: string;
}

export default function BookCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [books, setBooks] = useState<Book[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  // Load books from JSON
  useEffect(() => {
    const loadBooks = async () => {
      try {
        // Dynamically import all images from the books folder
        const imageModules = import.meta.glob('/src/assets/books/*.{png,jpg,jpeg,webp}');
        const imagePaths = Object.keys(imageModules);
        const booksData = booksList;
        
        // Match books with their images based on title
        const booksWithImages = booksData.map((book) => {
          const normalizedTitle = book.title.toLowerCase().replace(/[^a-z0-9]/g, '');
          const matchingImage = imagePaths.find(path => {
            const filename = path.split('/').pop()?.split('.')[0].toLowerCase().replace(/[^a-z0-9]/g, '') || '';
            return filename === normalizedTitle;
          });

          return {
            ...book,
            image: matchingImage || '/placeholder-book.png'
          };
        });

        setBooks(booksWithImages);
      } catch (error) {
        console.error('Error loading books:', error);
      }
    };

    loadBooks();
  }, []);

  // Calculate visible count based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) setVisibleCount(1);
      else if (width <= 768) setVisibleCount(2);
      else if (width <= 1024) setVisibleCount(3);
      else if (width <= 1280) setVisibleCount(4);
      else setVisibleCount(5);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, books.length - visibleCount);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [books.length, visibleCount, isPaused]);

  // Gap between items in pixels (must match CSS .carousel-track gap)
  const gap = 20;

  return (
    <section className="book-carousel-section">
      <div className="carousel-container">
        {/* Section Header */}
        <h2 className="carousel-title">
          Academic Books
        </h2>
        <div className="book-carousel-underline"></div>

        {/* Carousel Container */}
        <div 
          className="carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="carousel-track"
            style={{ transform: `translateX(calc(-${currentIndex} * (100% + ${gap}px) / ${visibleCount}))` }}
          >
            {books.map((book, index) => (
              <div key={index} className="book-card">
                {/* Book Cover */}
                <div className="book-cover">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="book-image"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder-book.png';
                    }}
                  />
                </div>

                {/* Book Info */}
                <div className="book-info">
                  <h3 className="book-title">
                    {book.title}
                  </h3>
                  <p className="book-author">
                    by {book.author}
                  </p>

                  {/* Buttons */}
                  <div className="book-actions">
                    <button
                      className="action-btn"
                      onClick={() => console.log('Preview:', book.title)}
                    >
                      Preview
                    </button>
                    <button
                      className="action-btn"
                      onClick={() => console.log('Buy:', book.title)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="carousel-dots">
          {Array.from({ length: Math.max(0, books.length - visibleCount + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}