import { PartialType } from "@nestjs/mapped-types";
import { CreateCourseDto } from "./create-course.dto.ts";

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    //usar a ? implica que eu posso receber ou não algum dos parâmetros, eles são opcionais
    //readonly name?: string; 
    //readonly description?: string; 
    //readonly tags?: string[] 
}
