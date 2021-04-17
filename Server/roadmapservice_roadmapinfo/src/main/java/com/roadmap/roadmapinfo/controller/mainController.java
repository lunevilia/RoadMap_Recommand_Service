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
	
	// 로드맵 작성자 아이디 리턴
	@GetMapping(path = "/getruserid")
	public String getRuserId(@RequestParam int ruid) {
		
		result = uMapper.getUserId(ruid);
		
		return result;
	}
	
	//로드맵 1개 정보 가져오기
	@GetMapping(path = "/getroadmapinfo")
	public List<RoadmapDto> getRoadmapInfo(@RequestParam String rid) {
		
		RoadmapDto roadmapDto = new RoadmapDto();
		roadmapDto.setRid(Integer.parseInt(rid));
		
		List<RoadmapDto> list = uMapper.getRoadmapInfo(roadmapDto);
		System.out.println(list);
		return list;
	}
	
	//좋아요 로드맵 가져오기
	@GetMapping(path = "/getuserloveroadmap")
	public List<RoadmapDto> getUserLoveRoadmap(@RequestParam String userId){
		
		try {
			List<RoadmapDto> list = uMapper.getUserLoveRoadmap(userId);
			System.out.println(list);
			return list;
			
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}
	
	// 내가 작성한 로드맵 가져오기
	@GetMapping(path = "/getuserroadmap")
	public List<RoadmapDto> getUserRoadmap(@RequestParam String userId){
		
		try {
			List<RoadmapDto> list = uMapper.getUserRoadmap(userId);
			System.out.println(list);
			return list;
			
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}
	
	@GetMapping(path = "/getsearchroadmap")
	public List<RoadmapDto> getSearchRoadmap(@RequestParam String query){
		
		query = "%" + query + "%";
		
		try {
			List<RoadmapDto> list = uMapper.getSearchRoadmap(query);
			System.out.println(list);
			return list;
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}
}
