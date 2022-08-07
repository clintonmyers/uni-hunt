// import Image from 'next/image';
import Link from 'next/link';
import navStyles from './nav.module.scss';

function Nav() {
  return (
    <header className={navStyles.header}>
      <div className="left-container">
        {/* <Image
          src="../public/US-DeptOfEducation-Seal.png"
          alt="Department of Education Seal"
        /> */}
        <div className="title-container">
          <span>U.S. DEPARTMENT OF EDUCATION</span>
          <span>College Scorecard</span>
        </div>
      </div>
      <div className="right-container">
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/data">
                <a>About the Data</a>
              </Link>
            </li>
            <li>
              <Link href="/search">
                <a>Search</a>
              </Link>
            </li>
            <li>
              <Link href="/compare">
                <a>Compare:</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
