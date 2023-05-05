import React from "react";
import { STATUS } from "../../utils/status";
import "./Category.scss";
import { Link } from "react-router-dom";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

const Category = ({ categories, status }) => {
  if (status === STATUS.Error) return <Error />;
  if (status === STATUS.LOADING) return <Loader />;

  console.log(categories)

  return (
    <div>
      <section className='categories py-5  bg-ghost-white  id="categories" '>
        <div className="container">
          <div className="categories-content">
            <div className="section-title">
              <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
                Category
              </h3>
            </div>

            <div className="category-items grid ">
              {
                categories.slice(0,5).map((category) => {
                  <Link to={`category/${category.id}`} key={category.id}>
                    <div className="category-item">
                      <img src={category.image} alt="" />
                    </div>  
                  </Link>
                })
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
