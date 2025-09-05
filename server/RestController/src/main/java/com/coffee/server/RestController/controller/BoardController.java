package com.coffee.server.RestController.controller;


import com.coffee.server.RestController.dto.BoardDTO;
import com.coffee.server.RestController.dto.PageRequestDTO;
import com.coffee.server.RestController.dto.PageResponseDTO;
import com.coffee.server.RestController.service.BoardService;
import com.github.pagehelper.PageInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/board")
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/")
    public String index() {
        return "index"; // This will return the index.html file located in src/main/resources/templates
    }

    @PostMapping("/save")
    public Map<String, Long> save(@RequestBody BoardDTO boardDTO) { // @RequestBody is used
        // to bind the request body to the method parameter 만약 @RequestBody가 없으면 Postman에서 결과가 에러 상태인 400번대가 뜸. 주의.
        log.info("Save method called");
        log.info(boardDTO);
        Long id = boardService.save(boardDTO);

        return Map.of("id", id);
        // Logic to save a board can be added here
        // For example, you can call boardService.save() with appropriate parameters
    }

    @GetMapping("/{id}")
    public BoardDTO findById(@PathVariable Long id) {
        log.info("Find by ID method called with ID: " + id);
        BoardDTO boardDTO = boardService.findById(id);
        log.info("Retrieved BoardDTO: " + boardDTO);
        return boardDTO; // This will return the BoardDTO object as JSON
    }

    @PutMapping("/{id}")
    public Map<String, String> update(@PathVariable Long id, @RequestBody BoardDTO boardDTO) {
        log.info("Update method called with ID: " + id);
        log.info("BoardDTO to update: " + boardDTO);
        boardDTO.setId(id); // Set the ID for the board to be updated
        boardService.update(boardDTO);
        return Map.of("message", "Board updated successfully");
    }

    @DeleteMapping("/{id}")
    public Map<String, String> delete(@PathVariable Long id) {
        log.info("Delete method called with ID: " + id);
        boardService.delete(id);
        return Map.of("message", "Board deleted successfully");
    }

    @GetMapping("/list")
//    @RequestParam은 요청 파라미터를 메소드 파라미터로 매핑하는 데 사용됩니다. 예를 들어 /board/list?page=2이면 2가 page 변수에 할당됩니다.
//    requried = false는 해당 파라미터가 필수가 아님을 의미합니다. 즉, 요청에 해당 파라미터가 없으면 기본값이 사용됩니다. 1이 기본값이됨.
    public PageInfo<BoardDTO> list(@RequestParam(name = "page", required = false, defaultValue = "1") Integer page,
                       @RequestParam(name = "size", required = false, defaultValue = "10") Integer size)
            /*@PathVariable Integer page, @PathVariable Integer size)*/ throws Exception{

        log.info("List method called with page: " + page + " and size: " + size);
        PageInfo<BoardDTO> pageInfo = boardService.getList(page, size);
        log.info("Retrieved PageInfo: " + pageInfo);
//        PageRequestDTO pagination = new PageRequestDTO();
//        pagination.setPage(page);
//        pagination.setSize(size);
//
//        PageResponseDTO<BoardDTO> responseDTO = new PageResponseDTO<>();
//        responseDTO.setPageRequestDTO(pagination);
//        pageInfo가 리액트에서 data가 되는 부분임. log.info, console.log 값이 서로 똑같음.
        return pageInfo;
    }
}
