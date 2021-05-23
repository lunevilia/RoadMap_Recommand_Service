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
	
	// return 값을 지정해주는 변수
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
		
		try{
			result = uMapper.getUserId(ruid);
			return result;
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	
	//로드맵 1개 정보 가져오기
	@GetMapping(path = "/getroadmapinfo")
	public List<RoadmapDto> getRoadmapInfo(@RequestParam String rid) {
		
		try{
			RoadmapDto roadmapDto = new RoadmapDto();
			roadmapDto.setRid(Integer.parseInt(rid));
			
			List<RoadmapDto> list = uMapper.getRoadmapInfo(roadmapDto);
			System.out.println(list);
			return list;
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
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
	
	// 검색결과 전송
	@GetMapping(path = "/getsearchroadmap")
	public List<RoadmapDto> getSearchRoadmap(@RequestParam String query){
		
		//query가 포함된 결과를 얻기 위해서 수정
		query = "%" + query + "%";
		System.out.println(query);
		
		try {
			List<RoadmapDto> list = uMapper.getSearchRoadmap(query);
			System.out.println(list);
			return list;
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}
//	
//	//추천 로드맵 가져오기
//	@GetMapping(path = "/getrecommandroadmap")
//	public List<RoadmapDto> getRecommandRoadmap(@RequestParam String userId, String type){
//		
//		try {
//			
//			List<RoadmapDto> list = null;
//			
//			if (type == "1") {				
//				list = uMapper.getRecommandRoadmap_1(userId);
//				System.out.println(list);
//				return list;
//			}
//			else if (type == "2") {
//				list = uMapper.getRecommandRoadmap_2(userId);
//				System.out.println(list);
//			}
//			
//			return list;
//			
//		}catch(Exception e) {
//			e.printStackTrace();
//			return null;
//		}
//	}
}
