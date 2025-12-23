import { ChevronRight, User, BookOpen, Lightbulb, FileText, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import './subjects.css';

const Subjects = () => {
  return (
    <section className="subjects-section">
      <div className="subjects-container">
        <div className="subjects-box">
          <h3>Subjects</h3>
          <ul className="subject-list">
            <li>
              <a href="#">
                Engineering & Management <ChevronRight size={14} />
              </a>
            </li>
            <li>
              <a href="#">
                Medical & Health Sciences <ChevronRight size={14} />
              </a>
            </li>
            <li>
              <a href="#">
                Interdisciplinary Sciences <ChevronRight size={14} />
              </a>
            </li>
          </ul>
          <a href="/login" className="subject-login-btn">
            <User size={16} /> Login
          </a>
        </div>
        
        <div className="action-buttons">
          <div className="action-card">
            <BookOpen className="icon" size={30} />
            <span>Submit a Journal Manuscript</span>
          </div>
          <div className="action-card">
            <Lightbulb className="icon" size={30} />
            <span>Submit a Book Proposal</span>
          </div>
          <div className="action-card">
            <FileText className="icon" size={30} />
            <span>Submit a textbook</span>
          </div>
          <Link to="/ipr" className="action-card">
            <Shield className="icon" size={30} />
            <span>IPR Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Subjects;