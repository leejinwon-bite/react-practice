package com.coffee.server.RestController.service;

import com.coffee.server.RestController.dto.BoardDTO;
import com.coffee.server.RestController.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    public void save(BoardDTO boardDTO) {


            boardRepository.save(boardDTO);

        }


}
