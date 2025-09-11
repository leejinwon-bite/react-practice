package com.coffee.server.RestController.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class PageRequestDTO {


    public Integer page = 1;

    public Integer size = 10;


// 밑에 코드가 없으면 controller에서 에러가남. 접근 제한자 관련한것 에러가 뜸. 필드값을 초기화 시키기 위해서 인듯.
    public PageRequestDTO() {}

    public PageRequestDTO(Integer page, Integer size) {
        this.page = page;
        this.size = size;
    }


}
