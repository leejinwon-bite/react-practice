package com.coffee.server.RestController.service;

import com.coffee.server.RestController.dto.BoardDTO;
import com.coffee.server.RestController.repository.BoardRepository;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

// @Service 어노테이션은 이 클래스가 서비스 레이어의 컴포넌트임을 나타냅니다. interface와 구현체를 분리하여 안만들어도 댐.
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

    public void update(BoardDTO boardDTO) {
        boardRepository.update(boardDTO);
    }

    public void delete(Long id) {
        boardRepository.delete(id);
    }

    public PageInfo<BoardDTO> getList(int page, int size) throws Exception {
        // Implement pagination logic here
        // This method should return a PageResponseDTO containing a list of BoardDTOs
        // based on the provided PageRequestDTO
        PageHelper.startPage(page, size); // 페이지 번호와 페이지 크기를 설정합니다.

        List<BoardDTO> list = boardRepository.getList();

        // rawList가 Page 타입인지 확인
        if (list instanceof Page) {
            PageInfo<BoardDTO> pageInfo = new PageInfo<>(list); // 정상 작동
        } else {
            // 페이징 정보가 누락될 수 있음
            System.out.println("rawList is not Page type. 페이징 정보가 누락될 수 있습니다.");
        }


        PageInfo<BoardDTO> pageInfo = new PageInfo<>(list, 10); // 10은 View page에서 보여줄 페이지 번호의 개수입니다.
        return pageInfo; // Placeholder return statement, implement actual logic
    }

}
