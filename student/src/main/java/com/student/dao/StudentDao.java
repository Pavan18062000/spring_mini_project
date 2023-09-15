package com.student.dao;

import java.util.List;

import com.student.model.Student;

public interface StudentDao {
	public Student save(Student student);
	public Student updateStudent(Student student);
	public Student getStudent(int id);
	public List<Student> getAll() ;
	public int deleteById(int id);
		
	

}
