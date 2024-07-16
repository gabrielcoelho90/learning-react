export default function TabButton({ children,isSelected, ...props}) { // Here ...props ,or wahtever name we choose, are creating an object and storing values in it, in this case isSelected and onClick.
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {/* Above ...props are 'spreading' the content */}
        {children}
      </button>
    </li>
  );
}
