package com.roadmap.social.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.roadmap.social.dao.UserMapper;
import com.roadmap.social.dto.BookRankDto;
import com.roadmap.social.dto.CommentDto;
import com.roadmap.social.dto.RankDto;

@RestController
public class mainController {
	
	public String result = "";
	
	@Autowired
	private UserMapper uMapper;
	
	@GetMapping(path = "/test")
	public String test() {
		return "success";
	}
	
//	@GetMapping(path = "/gettoprank")
//	public List<RankDto> getTopRank() {
//		
//		List<RankDto> list = uMapper.getTopRank();
//		System.out.println(list);
//
//		return list;
//	}
	
	@GetMapping(path = "/gettopbook")
	public List<BookRankDto> getTopBook(){
		
		List<BookRankDto> list = uMapper.getTopBook();
		System.out.println(list);
		
		return list;				
	}
}
