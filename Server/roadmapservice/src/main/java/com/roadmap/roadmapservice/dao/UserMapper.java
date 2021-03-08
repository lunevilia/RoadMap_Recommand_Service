package com.roadmap.roadmapservice.dao;

import java.util.List;

import com.roadmap.roadmapservice.dto.UserDto;

//여기에서 api 기능 정의

public interface UserMapper {
	//중복 가입 확인 및 UID 받아오기
	public String checkUser(String userId);
	
	//회원가입 정보 insert 쿼리
	public void insertUser (UserDto user);
	
	//로그인 확인 쿼리
	public String login(String userId, String userPw);
	
	//마이페이지 이메일 get
	public String getemail(String userId);
	
	// 회원 탈퇴
	public void deleteUser (String userId);

	//	public void updateUser (UserDto user);
//	public UserDto selectOneUser (String userId);
//	public List<UserDto> selectAllUser();
}
