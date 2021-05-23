package com.roadmap.social.dao;

import java.util.List;

import com.roadmap.social.dto.BookRankDto;
import com.roadmap.social.dto.CommentDto;
import com.roadmap.social.dto.RankDto;

public interface UserMapper {
	
	public List<RankDto> getTopRank();
	public List<BookRankDto> getTopBook();
}
