package com.coffee.server.RestController.repository;

import com.coffee.server.RestController.dto.BoardDTO;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class BoardRepository {

    private final SqlSession sql; // mybatis의존성을 주입합니다.

    public void save(BoardDTO boardDTO) {
        sql.insert("Board.save", boardDTO); // mybatis의 xml 파일에 있는 쿼리문을 실행합니다.
//        문자열 "Board.save"는 mybatis의 board-mapper.xml 파일에서 쿼리문을 찾기 위한 키입니다.
        // "Board"는 네임스페이스(namespace)로, "save"는 해당 네임스페이스 내의 SQL ID를 나타냅니다.
        // 이 구조는 mybatis에서 SQL 쿼리를 관리하는 일반적인 방식입니다.
    }
}
