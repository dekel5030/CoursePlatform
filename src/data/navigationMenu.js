const professionalCourses = [
  { id: 1, label: "לומיון", href: "#web-dev" },
  { id: 2, label: "רוויט", href: "#app-dev" },
  { id: 3, label: "אוטוקד", href: "#cs" },
  { id: 4, label: "סקצאפ", href: "#cyber" },
  { id: 5, label: "ריינו", href: "#all-courses" },
];

const studentResources = [
  { id: 1, label: "חומרים", href: "#web-dev" },
  { id: 2, label: "ציונים", href: "#app-dev" },
  { id: 3, label: "מבחנים", href: "#cs" },
  { id: 4, label: "סיכומים", href: "#cyber" },
];

const mainNavItems = [
  { id: 1, label: "ראשי", link: "/" },
  {
    id: 2,
    label: "קורסים מקצועיים",
    link: "/courses",
    dropdown: professionalCourses,
  },
  { id: 3, label: "קורסים אונליין", dropdown: professionalCourses },
  { id: 4, label: "סטודנטים", dropdown: studentResources },
  { id: 5, label: "אודות", link: "/about" },
  { id: 6, label: "יצירת קשר", href: "#about" },
  { id: 7, label: "חנות", link: "/checkout" },
];

export { professionalCourses, studentResources, mainNavItems };
