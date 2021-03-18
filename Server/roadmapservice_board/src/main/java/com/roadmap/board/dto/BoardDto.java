package com.roadmap.board.dto;

public class BoardDto {
	
	private int bid;
	private int bindex;
	private String btext;
	private String bdate;
	private int blike;
	
	public void setBid(int bid) {
		this.bid = bid;
	}
	
	public int getBid() {
		return bid;
	}
	
	public void setBindex(int bindex) {
		this.bindex = bindex;
	}
	
	public int getBindex() {
		return bindex;
	}
	
	public void setBtext(String btext) {
		this.btext = btext;
	}
	
	public String getBtext() {
		return btext;
	}
	
	public void setBdate(String bdate) {
		this.bdate = bdate;
	}
	
	public String getbDate() {
		return bdate;
	}
	
	public void setBlike(int blike) {
		this.blike = blike;
	}
	
	public int getBlike() {
		return blike;
	}
}
