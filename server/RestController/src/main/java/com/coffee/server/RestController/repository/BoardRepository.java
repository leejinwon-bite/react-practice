package com.coffee.server.RestController.repository;

import com.coffee.server.RestController.dto.BoardDTO;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class BoardRepository {

    private final SqlSession sql; // mybatis의존성을 주입합니다.

    public BoardDTO save(BoardDTO boardDTO) {
        sql.insert("Board.save", boardDTO); // mybatis의 xml 파일에 있는 쿼리문을 실행합니다.
//        문자열 "Board.save"는 mybatis의 board-mapper.xml 파일에서 쿼리문을 찾기 위한 키입니다.
        // "Board"는 네임스페이스(namespace)로, "save"는 해당 네임스페이스 내의 SQL ID를 나타냅니다.
        // 이 구조는 mybatis에서 SQL 쿼리를 관리하는 일반적인 방식입니다.
        return boardDTO;
//        원래는 저장관련한 SQL문은 return값이 없는데, 다른 테이블 조회를 위해
        // 여기서는 게시글 저장 후 id값을 활용하기 위해서 return값을 BoardDTO로 설정했습니다.
        // 이건 연관관계 매핑입니다. 조인했다고 볼 수 있음. 게시판 관련 테이블의 Pk를
        // 파일첨부 테이블의 외래키 FK 로 설정하는 것과 비슷합니다.
    }
}
