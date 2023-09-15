package com.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.student.model.Student;
import com.student.service.StudentService;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentController {
	@Autowired
	StudentService studentService;

	@PostMapping("/insert")
	@ResponseBody
	public Student save(@RequestBody Student student) {
		return this.studentService.save(student);
	}

	@PutMapping("/update")
	@ResponseBody
	public Student updateStudent(@RequestBody Student student) {
		try {
			this.studentService.updateStudent(student);
		} catch (Exception e) {
			System.out.println("error occured int service updateService");
			e.printStackTrace();
			return null;
		}
		return student;
	}

	@GetMapping("/get/{id}")
	@ResponseBody
	public Student getStudent(@PathVariable int id) {
		try {
			return this.studentService.getStudent(id);
		} catch (Exception e) {
			System.out.println("error occured int service getStudent");
			e.printStackTrace();
			return null;
		}

	}

	@ResponseBody
	@GetMapping("/getall")
	public List<Student> getAll() {
		try {
			return this.studentService.getAll();

		} catch (Exception e) {
			System.out.println("error occured in controller getall");
			e.printStackTrace();
			return null;

		}

	}

	@ResponseBody
	@DeleteMapping("/delete/{id}")
	public int deleteById(@PathVariable int id) {
		return this.studentService.deleteById(id);
	}
}
