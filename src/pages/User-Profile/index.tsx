import React from "react";
import ProfileIcon from "src/assests/Images/User-Profile/profileIcon.jpg";
import CustomButton from "src/components/Button/CustomButton";
import style from "./UserProfile.module.scss";

const UserProfile = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.containerWrapper}>
        <div className={style.iconWrapper}>
          <img src={ProfileIcon} />
        </div>
        <div className={style.detailWrapper}>
          <hr />
          <div className={style.fieldWrapper}>
            <div className={style.fieldTitle}>
              <span>Name:</span>
            </div>
            <div className={style.fieldDetail}>
              <span>Sarswenterdra Singh</span>
            </div>
          </div>
          <hr />
          <div className={style.fieldWrapper}>
            <div className={style.fieldTitle}>
              <span>Admission:</span>
            </div>
            <div className={style.fieldDetail}>
              <span>2013bca2216</span>
            </div>
          </div>
          <hr />
          <div className={style.fieldWrapper}>
            <div className={style.fieldTitle}>
              <span>Email:</span>
            </div>
            <div className={style.fieldDetail}>
              <span>sarswenterdra@gmail.com</span>
            </div>
          </div>
          <hr />
          <div className={style.fieldWrapper}>
            <div className={style.fieldTitle}>
              <span>Batch:</span>
            </div>
            <div className={style.fieldDetail}>
              <span>2013-2017</span>
            </div>
          </div>
          <hr />
          <div className={style.fieldWrapper}>
            <div className={style.fieldTitle}>
              <span>Mobile No:</span>
            </div>
            <div className={style.fieldDetail}>
              <span>9876543234</span>
            </div>
          </div>
          <hr />
          <div className={style.fieldWrapper}>
            <div className={style.fieldTitle}>
              <span>Branch:</span>
            </div>
            <div className={style.fieldDetail}>
              <span>Computer Science & Engg.(CS)</span>
            </div>
          </div>
          <hr />
          <div className={style.fieldWrapper}>
            <div className={style.fieldTitle}>
              <span>Semester & Section:</span>
            </div>
            <div className={style.fieldDetail}>
              <span>6-D</span>
            </div>
          </div>

          <CustomButton
            buttonText={"RESET MOBILE NO"}
            type={"primary"}
            htmlType="submit"
          />
          <CustomButton
            buttonText={"RESET PASSWORD"}
            type={"primary"}
            htmlType="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
