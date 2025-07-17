package com.coffee.server.RestController.controller;

import com.coffee.server.RestController.dto.BoardDTO;
import com.coffee.server.RestController.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
public class Ccontroller {

    private final BoardService boardService;





        @GetMapping("/save")
        public String save() {
            return "save";
        }

    @PostMapping("/save")
//    IOException을 throws로 던졌는데, 이건그냥 귀찮아서 대충 던진거고, 예외 발생시 View page쪽에서
//    다른 경고창이나 뭐 다른거 띄우도록 하기위해 던지지 않고, try-catch로 처리하는게 더 완성도 있음. 다른 창으로
//    return해서 javascript alert로 경고창 띄우는 것도 가능함.
    public String save(BoardDTO boardDTO) {
        System.out.println("BoardDTO = " + boardDTO);
        boardService.save(boardDTO); // 첨부파일도 같이 save
        return "redirect:/list"; // 저장 후 목록 페이지로 리다이렉트
    }
}
