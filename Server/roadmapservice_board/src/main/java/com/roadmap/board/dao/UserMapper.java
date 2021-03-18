package com.roadmap.board.dao;

import java.util.List;

import com.roadmap.board.dto.CommentDto;

public interface UserMapper {
	public List<CommentDto> getComment(String rid);

	public void insertComment(CommentDto commentDto);
	
	public void deleteComment(CommentDto commentDto);
}
