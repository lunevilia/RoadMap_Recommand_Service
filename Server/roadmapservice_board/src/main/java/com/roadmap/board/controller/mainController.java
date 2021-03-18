package com.roadmap.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.roadmap.board.dao.UserMapper;
import com.roadmap.board.dto.CommentDto;

@RestController
public class mainController {
	
	public String result = "";
	
	@Autowired
	private UserMapper uMapper;
	
	@GetMapping(path = "/test")
	public String test() {
		return "success";
	}
	
	@GetMapping(path = "/getcomment")
	public List<CommentDto> getComment(@RequestParam String rid) {
		List<CommentDto> list = uMapper.getComment(rid);
		System.out.println(list);
		return list;
	}
	
	@GetMapping(path = "/insertcomment")
	public String insertComment(@RequestParam int rid, String uid, String ucomment, String udate) {
		
		try {			
			CommentDto commentDto = new CommentDto();
			commentDto.setRid(rid);
			commentDto.setUid(uid);
			commentDto.setUcomment(ucomment);
			commentDto.setDate(udate);
			uMapper.insertComment(commentDto);
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
			uMapper.deleteComment(commentDto);
			result = "success";
			
		}catch(Exception e) {
			result = "fail";
			e.printStackTrace();
		}
		
		return result;
	}
}
