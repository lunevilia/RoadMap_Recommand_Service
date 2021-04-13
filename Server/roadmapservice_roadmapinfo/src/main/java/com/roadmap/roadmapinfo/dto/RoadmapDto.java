package com.roadmap.roadmapinfo.dto;

public class RoadmapDto {
	private int rid;
	private int uid;
	private String userId;
	private String ruid;
	private String rname;
	private String rinfo;
	
	public void setRid(int rid) {
		this.rid = rid;
	}
	
	public int getRid() {
		return rid;
	}
	
	public void setUid(int uid) {
		this.uid = uid;
	}
	
	public int getUid() {
		return uid;
	}
	
	public void setRname(String rname) {
		this.rname = rname;
	}
	
	public String getRname() {
		return rname;
	}
	
	public void setRinfo(String rinfo) {
		this.rinfo = rinfo;
	}
	
	public String getRinfo() {
		return rinfo;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getRuid() {
		return ruid;
	}

	public void setRuid(String ruid) {
		this.ruid = ruid;
	}
}
