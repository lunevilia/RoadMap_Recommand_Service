package com.roadmap.roadmapservice.dto;

public class UserDto {
	
	private String userName;
	private String userId;
	private String userPw;
	private int userAge;
	private String userArea;
	private String userJob;
	private String userInterest;
	private String userEmail;
	private String userPhone;
	private String userSex;
	
	public String getUserId() {
		return userId;
	}
	
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public String getUserPw() {
		return userPw;
	}
	
	public void setUserPw(String userPw) {
		this.userPw = userPw;
	}
	
	public String getUserEmail() {
		return userEmail;
	}
	
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	
	public String getUserJob() {
		return userJob;
	}
	
	public void setUserJob(String userJob) {
		this.userJob = userJob;
	}
	
//	@Override
//	public String toString() {
//		return "UserDto [userId=" + userId + ", userPw=" + userPw + ", userEmail=" + userEmail + ", userWork=" + userJob + "]";
//	}

	public int getUserAge() {
		return userAge;
	}

	public void setUserAge(int userAge) {
		this.userAge = userAge;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserArea() {
		return userArea;
	}

	public void setUserArea(String userArea) {
		this.userArea = userArea;
	}

	public String getUserInterest() {
		return userInterest;
	}

	public void setUserInterest(String userInterest) {
		this.userInterest = userInterest;
	}

	public String getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}

	public String getUserSex() {
		return userSex;
	}

	public void setUserSex(String userSex) {
		this.userSex = userSex;
	}
}
