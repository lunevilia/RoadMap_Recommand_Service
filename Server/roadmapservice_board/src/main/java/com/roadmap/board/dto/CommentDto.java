package com.roadmap.board.dto;

public class CommentDto {
	private int rid;
	private String uid;
	private String ucomment;
	private String udate;
	
	public void setUid(String uid) {
		this.uid = uid;
	}
	
	public String getUid() {
		return uid;
	}
	
	public void setRid(int rid) {
		this.rid = rid;
	}
	
	public int getRid() {
		return rid;
	}
	
	public void setUcomment(String ucomment) {
		this.ucomment = ucomment;
	}
	
	public String getUcomment() {
		return ucomment;
	}
	
	public void setDate(String udate) {
		this.udate = udate;
	}
	
	public String getDate() {
		return udate;
	}
}
