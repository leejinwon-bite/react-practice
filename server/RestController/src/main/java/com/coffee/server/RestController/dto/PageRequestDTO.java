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

    public PageRequestDTO() {}

    public PageRequestDTO(Integer page, Integer size) {
        this.page = page;
        this.size = size;
    }


}
