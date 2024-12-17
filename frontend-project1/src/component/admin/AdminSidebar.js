import React, { useState } from "react";

const NavItem = ({ iconClass, label, href, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex gap-5 items-center px-5 py-4 w-48 max-w-full min-h-[50px] cursor-pointer ${
        isActive
          ? "text-white bg-[#1445FE] rounded-lg"
          : "hover:bg-gray-100 transition-colors rounded-lg"
      }`}
    >
      <i
        className={`${iconClass} ${
          isActive ? "text-white" : "text-gray-500"
        } w-5 text-lg`}
      />
      <div className="self-stretch my-auto font-bold">{label}</div>
    </div>
  );
};

const Sidebar = () => {
  const [activePath, setActivePath] = useState("/statistic");

  const navItems = [
    { iconClass: "fa fa-chart-bar", label: "Thống kê", href: "/statistic" },
    {
      iconClass: "fa-solid fa-person-running",
      label: "Bài tập",
      href: "/bai-tap",
    },
    { iconClass: "fa fa-utensils", label: "Món ăn", href: "/mon-an" },
    { iconClass: "fa fa-user", label: "Profile", href: "/profile" },
  ];

  const handleNavigation = (href) => {
    setActivePath(href);
  };

  return (
    <aside className="flex flex-col w-[16%] bg-white min-h-screen px-5 pt-5">
      <nav className="space-y-1">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            iconClass={item.iconClass}
            label={item.label}
            href={item.href}
            isActive={activePath === item.href}
            onClick={() => handleNavigation(item.href)}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
