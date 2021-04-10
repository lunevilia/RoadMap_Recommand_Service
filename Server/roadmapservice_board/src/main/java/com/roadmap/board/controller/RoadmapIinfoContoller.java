package com.roadmap.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.roadmap.board.dao.RoadmapInfoMapper;
import com.roadmap.board.dto.BoardDto;
import com.roadmap.board.dto.RoadmapInfoDto;

@RestController
public class RoadmapIinfoContoller {
	
	public String result = "";
	
	@Autowired
	private RoadmapInfoMapper roadmapInfoMapper;

	@GetMapping(path = "/test")
	public String test() {
		
		return "success";
	}
	
	@GetMapping(path = "/getlikeroadmap")
	public List<BoardDto> getLikeRoadmap(@RequestParam String uid){
		
		try {
			
			BoardDto boardDto = new BoardDto();
			
			RoadmapInfoDto roadmapInfoDto = new RoadmapInfoDto();
			
			boardDto.setUid(roadmapInfoMapper.getUid(uid));
			
			List<BoardDto> list = roadmapInfoMapper.getLikeRoadmap(roadmapInfoMapper.getUid(uid));
			
			return list;
			
		}catch(Exception e) {
			e.printStackTrace();
		}		
		
		return null;
	}
}
