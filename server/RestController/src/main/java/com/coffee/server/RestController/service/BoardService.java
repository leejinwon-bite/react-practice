package com.coffee.server.RestController.service;

import com.coffee.server.RestController.dto.BoardDTO;
import com.coffee.server.RestController.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    public Long save(BoardDTO boardDTO) {
            boardRepository.save(boardDTO);
            return boardDTO.getId();
        }

    public BoardDTO findById(Long id) {
        return boardRepository.findById(id);
    }

}
