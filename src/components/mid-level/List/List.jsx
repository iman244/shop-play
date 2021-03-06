import "./List.css";
import React from "react";
import Item from "../../low-level/Item/Item";
import CstCardIdPB from "../../low-level/Custom/CstCardIdPB";
import CstCardproduct1 from "../../low-level/Custom/CstCardproduct1";
import IconText from "../../low-level/Icon/IconText";
import ProductCard from "../ProductCard/ProductCard";

function List({
  slide,
  hr,
  className,
  comp_ClassName,
  hr_className,
  component,
  data,
  firstOrder,
}) {
  let ulClassName = `il-${component.toLowerCase()}List`;
  const Component = (item) => {
    switch (component) {
      case "text":
        return <span className={`${comp_ClassName}`}>{item.text}</span>;
      case "Item":
        return (
          <Item className={`${comp_ClassName} ${item.className}`} data={item} />
        );
      case "ProductCard":
        return <ProductCard data={item} />;
      case "CstCardIdPB":
        return (
          <CstCardIdPB
            className={`${comp_ClassName} ${item.className}`}
            id={item.id}
            img_src={item.img}
            img_alt="category"
            text_p={item.title}
            text_button="shop now"
            link={item.Link}
          />
        );
      case "CstCardproduct1":
        return (
          <CstCardproduct1
            className={`${comp_ClassName} ${item.className}`}
            id={item.id}
            img_src={item.img}
            img_alt="product"
          />
        );
      case "Icon":
        return (
          <i
            className={
              comp_ClassName ? `${item.icon} ${comp_ClassName}` : `${item.icon}`
            }
          ></i>
        );
      case "IconText":
        return (
          <IconText
            className={`${comp_ClassName} ${item.className}`}
            icon={item.icon}
            text={item.text}
          />
        );
      default:
        return <p>no valid component detected</p>;
    }
  };

  return (
    <>
      {!slide ? (
        <ul
          className={
            className ? `${ulClassName} ${className}` : `${ulClassName}`
          }
        >
          {data ? (
            data.map((item) => (
              <>
                <li key={item.id} className={item.liClassName}>
                  {Component(item)}
                </li>
                {hr && <hr className={hr_className} />}
              </>
            ))
          ) : (
            <p>no data ...</p>
          )}
        </ul>
      ) : (
        <ul
          style={{ transform: `translateX(${firstOrder * -100}%)` }}
          className={
            className ? `${ulClassName} ${className}` : `${ulClassName}`
          }
        >
          {data ? (
            data.map((item) => {
              return (
                <li key={item.id} className={item.liClassName}>
                  {Component(item)}
                </li>
              );
            })
          ) : (
            <p>no data ...</p>
          )}
        </ul>
      )}
    </>
  );
}

export default List;
