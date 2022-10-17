import React from "react";
import ProfileIcon from "src/assests/Images/User-Profile/profileIcon.jpg";
import CustomButton from "src/components/Button/CustomButton";
import style from "./UserProfile.module.scss";

const UserProfile = () => {
  const loginData = JSON.parse(localStorage.getItem("userData") as string);

  /* eslint-disable no-console */
  // console.log("localstorageData:", loginData);
  return (
    <div className={style.mainContainer}>
      <div className={style.containerWrapper}>
        <div
          className={
            loginData.user_type !== "Student"
              ? style.iconWrapper
              : style.iconWrapper1
          }
        >
          <img src={ProfileIcon} />
        </div>
        <div className={style.detailWrapper}>
          <hr />
          <div className={style.fieldWrapper}>
            <div className={style.fieldTitle}>
              <span>User Type:</span>
            </div>
            <div className={style.fieldDetail}>
              <span>{loginData.user_type}</span>
            </div>
          </div>
          <hr />
          <div className={style.fieldWrapper}>
            <div className={style.fieldTitle}>
              <span>Name:</span>
            </div>
            <div className={style.fieldDetail}>
              <span>{loginData.name}</span>
            </div>
          </div>
          <hr />
          <div className={style.fieldWrapper}>
            <div className={style.fieldTitle}>
              <span>Admission:</span>
            </div>
            <div className={style.fieldDetail}>
              <span>{loginData.admission}</span>
            </div>
          </div>
          <hr />
          <div className={style.fieldWrapper}>
            <div className={style.fieldTitle}>
              <span>Email:</span>
            </div>
            <div className={style.fieldDetail}>
              <span>{loginData.email}</span>
            </div>
          </div>
          <hr />
          <div className={style.fieldWrapper}>
            <div className={style.fieldTitle}>
              <span>Mobile No:</span>
            </div>
            <div className={style.fieldDetail}>
              <span>{loginData.mobileNo}</span>
            </div>
          </div>
          {loginData.user_type === "Student" && (
            <>
              <hr />
              <div className={style.fieldWrapper}>
                <div className={style.fieldTitle}>
                  <span>Batch:</span>
                </div>
                <div className={style.fieldDetail}>
                  <span>{loginData.batch}</span>
                </div>
              </div>
              <hr />
              <div className={style.fieldWrapper}>
                <div className={style.fieldTitle}>
                  <span>Branch:</span>
                </div>
                <div className={style.fieldDetail}>
                  <span>{loginData.branch}</span>
                </div>
              </div>
              <hr />
              <div className={style.fieldWrapper}>
                <div className={style.fieldTitle}>
                  <span>Semester & Section:</span>
                </div>
                <div className={style.fieldDetail}>
                  <span>{loginData.semester}</span>
                </div>
              </div>
            </>
          )}

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
