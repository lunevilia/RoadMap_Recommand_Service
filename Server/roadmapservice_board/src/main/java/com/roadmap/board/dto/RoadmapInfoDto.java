package com.roadmap.board.dto;

public class RoadmapInfoDto {
	private String rid;
	private String uid;
	private String rname;
	
	public RoadmapInfoDto() {
		
	}
	
	public void setRid(String rid) {
		this.rid = rid;
	}
	
	public String getRid() {
		return rid;
	}
	
	public void setUid(String uid) {
		this.uid = uid;
	}
	
	public String getUid() {
		return uid;
	}
	
	public void setRname(String rname) {
		this.rname = rname;
	}
	
	public String getRname() {
		return rname;
	}
}
