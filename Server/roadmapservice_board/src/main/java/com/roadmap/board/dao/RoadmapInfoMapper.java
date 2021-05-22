package com.roadmap.board.dao;

import java.util.List;

import com.roadmap.board.dto.BoardDto;
import com.roadmap.board.dto.RoadmapInfoDto;

public interface RoadmapInfoMapper {
	public String getUid(String uid);
	
	public List<BoardDto> getLikeRoadmap(String string);
	
}
