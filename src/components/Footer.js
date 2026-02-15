export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <p>© {currentYear} Minhaj Aman. All rights reserved.</p>
    </footer>
  );
}