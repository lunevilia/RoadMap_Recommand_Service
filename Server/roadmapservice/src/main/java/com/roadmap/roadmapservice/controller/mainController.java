package com.roadmap.roadmapservice.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.roadmap.roadmapservice.dao.UserMapper;
import com.roadmap.roadmapservice.dto.UserDto;

//REST 서비스를 제공하기 위한 컨트롤러를 지정하는 어노테이션
@RestController
public class mainController {
	
	public String result = "";
	
	@Autowired
	private UserMapper uMapper;
	
	//GET 요청을 받기 위한 Mapping 어노테이션(PostMapping, DeleteMapping, PutMapping 이 있음.)
	
	// 회원가임
	@GetMapping(path = "/register")
	public String register(@RequestParam String userId, String userPw, String userEmail, String userWork, String major) {
		
		if(uMapper.checkUser(userId)==null) {		
			UserDto user = new UserDto();
			user.setUserId(userId);
			user.setUserPw(userPw);
			user.setUserEmail(userEmail);
			user.setUserWork(userWork);
			uMapper.insertUser(user);
			
			String uid = uMapper.checkUser(userId);
			String[] array = major.split(",");
			
			for(int i = 0; i<array.length; i++) {				
				uMapper.insertMajor(uid, array[i]);
			}
			
			result = "success";
		}
		else {
			result = "exist";
		}
		
		return result;
	}
	
	// 로그인
	@GetMapping(path = "/login")
	public String login(@RequestParam String userId, String userPw) {
		
		System.out.println(uMapper.login(userId, userPw));
		if(uMapper.login(userId, userPw)==null) {
			result = "noExist";
		}
		else {
			result = "success";
		}
		
		return result;
	}

	// 마이페이지 이메일
	@GetMapping(path = "/getemail")
	public String email(@RequestParam String userId) {
		
		result = uMapper.getemail(userId);
		System.out.println(result);
		
		return result;
	}

	// 회원탈퇴
	@GetMapping (path = "/checkout")
	public void checkout(@RequestParam String userId) {
		
		String uid = uMapper.checkUser(userId);
		System.out.println(uid);
		uMapper.deleteMajor(uid);
		uMapper.deleteUser(userId);
	}
	//	@GetMapping(path = "/test")
//	public Map<String, String> test() {
//		Map<String, String> map = new HashMap<>();
//		map.put("result", "Success");
//		return map;
//	}
}
