package com.roadmap.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.roadmap.board.dao.BoardMapper;
import com.roadmap.board.dto.BoardDto;
import com.roadmap.board.dto.CommentDto;

@RestController
public class BoardController {
	
	public String result = "";
	
	@Autowired
	private BoardMapper boardMapper;
	
	@GetMapping(path = "/getcomment")
	public List<CommentDto> getComment(@RequestParam String rid) {
		List<CommentDto> list = boardMapper.getComment(rid);
		System.out.println(list);
		return list;
	}
	
	@GetMapping(path = "/insertviewcount")
	public void insertViewCount(@RequestParam String userId, String rid) {
		try {

			String uid = boardMapper.getUid(userId);
			boardMapper.insertViewCount(uid,rid);
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	@GetMapping(path = "/insertcomment")
	public String insertComment(@RequestParam int rid, String uid, String ucomment, String udate) {
		
		try {			
			CommentDto commentDto = new CommentDto();
			commentDto.setRid(rid);
			commentDto.setUid(boardMapper.getUid(uid));
			commentDto.setUcomment(ucomment);
			commentDto.setDate(udate);
			boardMapper.insertComment(commentDto);
			result = "success";
			
		}catch(Exception e) {
			result = "fali";
			e.printStackTrace();
		}
		return result;
	}
	
	@GetMapping(path = "/deletecomment")
	public String delectComment(@RequestParam String uid, String udate) {
		
		try {
			CommentDto commentDto = new CommentDto();
			commentDto.setUid(uid);
			commentDto.setDate(udate);
			boardMapper.deleteComment(commentDto);
			result = "success";
			
		}catch(Exception e) {
			result = "fail";
			e.printStackTrace();
		}
		
		return result;
	}
	
	@GetMapping(path = "/getlovecount")
	public String getLoveCount(@RequestParam String rid) {
		
		try {
			
			result =  boardMapper.getLoveCount(Integer.parseInt(rid));
			System.out.println(result);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@GetMapping(path = "/getlovestatus")
	public String getLoveStatus(@RequestParam String rid, String uid) {
		
		try {
			
			BoardDto boardDto = new BoardDto();
			boardDto.setRid(rid);
			boardDto.setUid(boardMapper.getUid(uid));
			
			if(boardMapper.getLoveStatus(boardDto) != null) {
				result = "♥";
			}
			else result = "♡";
			
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
	
	@GetMapping(path = "/savelove")
	public String saveLove(@RequestParam String rid, String uid) {
		
		try {
			
			BoardDto boardDto = new BoardDto();
			boardDto.setRid(rid);
			boardDto.setUid(boardMapper.getUid(uid));
			
			boardMapper.saveLove(boardDto);
			
			result = "success";
			
		}catch(Exception e) {
			result = "fail";
			e.printStackTrace();
		}
		
		return result;
	}
	
	@GetMapping(path = "/deletelove")
	public String deleteLove(@RequestParam String rid, String uid){
		
		try {
			
			BoardDto boardDto = new BoardDto();
			boardDto.setRid(rid);
			boardDto.setUid(boardMapper.getUid(uid));
			
			boardMapper.deleteLove(boardDto);
			
			result = "success";
			
		}catch(Exception e) {
			result = "fail";
			e.printStackTrace();
		}
		
		return result;
	}

}
