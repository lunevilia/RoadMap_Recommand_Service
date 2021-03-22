package com.roadmap.roadmapinfo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.roadmap.roadmapinfo.dao.UserMapper;
import com.roadmap.roadmapinfo.dto.RoadmapDto;

@RestController
public class mainController {
	
	public String result = "";
	
	@Autowired
	private UserMapper uMapper;
	
	@GetMapping(path = "/test")
	public String test() {
		return "success";
	}
	
	//로드맵 1개 정보 가져오기
	@GetMapping(path = "/getroadmapinfo")
	public List<RoadmapDto> getComment(@RequestParam String rid) {
		
		RoadmapDto roadmapDto = new RoadmapDto();
		roadmapDto.setRid(Integer.parseInt(rid));
		
		List<RoadmapDto> list = uMapper.getRoadmapInfo(roadmapDto);
		System.out.println(list);
		return list;
	}
}
