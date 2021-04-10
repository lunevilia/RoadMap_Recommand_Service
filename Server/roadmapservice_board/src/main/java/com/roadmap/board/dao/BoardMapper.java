package com.roadmap.board.dao;

import java.util.List;

import com.roadmap.board.dto.BoardDto;
import com.roadmap.board.dto.CommentDto;

public interface BoardMapper {
	public List<CommentDto> getComment(String rid);

	public void insertComment(CommentDto commentDto);
	
	public void deleteComment(CommentDto commentDto);
	
	public String getLoveCount(int rid);
	
	public String getLoveStatus(BoardDto boardDto);
	
	public void saveLove(BoardDto boardDto);
	
	public void deleteLove(BoardDto boardDto);
	
	public String getUid(String uid);
}
