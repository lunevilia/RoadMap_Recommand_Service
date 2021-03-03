package com.roadmap.roadmapservice.dto;

public class UserDto {
	
	private String userId;
	private String userPw;
	private String userEmail;
	private String userWork;
	
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
	
	public String getUserWork() {
		return userWork;
	}
	
	public void setUserWork(String userWork) {
		this.userWork = userWork;
	}
	
	@Override
	public String toString() {
		return "UserDto [userId=" + userId + ", userPw=" + userPw + ", userEmail=" + userEmail + ", userWork=" + userWork + "]";
	}
}
