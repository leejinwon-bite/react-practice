package com.coffee.server.RestController.controller;


import com.coffee.server.RestController.dto.BoardDTO;
import com.coffee.server.RestController.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

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
}
