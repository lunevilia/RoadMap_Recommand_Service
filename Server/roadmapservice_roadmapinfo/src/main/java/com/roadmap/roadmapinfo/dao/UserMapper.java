package com.roadmap.roadmapinfo.dao;

import java.util.List;

import com.roadmap.roadmapinfo.dto.RoadmapDto;

public interface UserMapper {
	public List<RoadmapDto> getRoadmapInfo(RoadmapDto roadmapDto);
}
