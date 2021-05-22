package com.roadmap.social.dto;

import java.util.HashMap;

public class RankDto {
	private int rank;
	private String rid;
	private String rname;
	
	public void setRank(int rank) {
		this.rank = rank;
	}
	
	public int getRank() {
		return rank;
	}
	
	public void setRid(String rid) {
		this.rid = rid;
	}
	
	public String getRid() {
		return rid;
	}
	
	public void setRname(String rname) {
		this.rname = rname;
	}
	
	public String getRname() {
		return rname;
	}
}
