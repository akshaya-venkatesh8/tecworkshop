import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.scss";

const NavBar = ({ data }) => {
  const childPageWrapper = useRef(null);
  const history = useHistory();

  const showChildPages = (item, action) => {
    if (item.CHILD_PAGES && item.CHILD_PAGES.length > 0) {
      if (childPageWrapper && childPageWrapper.current)
        action === "over"
          ? childPageWrapper.current.classList.add("active")
          : childPageWrapper.current.classList.remove("active");
    }
  };

  const renderChildPages = (childPages) => {
    let childPageList = [];

    childPages.forEach((child, index) => {
      childPageList.push(
        <span key={index} onClick={(event) => handleClick(event, child.LINK)}>
          {child.NAME}
        </span>
      );
    });

    return childPageList;
  };

  const renderMenu = () => {
    let navList = [];
    data.forEach((item, index) => {
      navList.push(
        <div
          className="nav-links"
          key={index}
          onMouseOver={() => showChildPages(item, "over")}
          onMouseOut={() => showChildPages(item, "out")}
        >
          <span onClick={(event) => handleClick(event, item.LINK)}>
            {item.NAME}
          </span>
          {item.CHILD_PAGES && item.CHILD_PAGES.length > 0 ? (
            <div ref={childPageWrapper} className="child-page-link-wrapper">
              {renderChildPages(item.CHILD_PAGES)}
            </div>
          ) : null}
        </div>
      );
    });
    return navList;
  };

  const handleClick = (event, link) => {
    event.preventDefault();
    document.body.classList.remove("overlay-active");
    history.push(link);
  };

  return <div className="nav-wrapper">{renderMenu()}</div>;
};

export default React.memo(NavBar);
