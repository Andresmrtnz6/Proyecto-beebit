// staffLayout.js
const StaffLayout = ({ children }) => {
    return (
      <div>
        <header>Header Staff</header>
        <main>{children}</main>
        <footer>Footer Staff</footer>
      </div>
    );
  };
  
  export default StaffLayout;
  