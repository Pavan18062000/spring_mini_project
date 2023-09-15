package com.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.dao.StudentDaoImp;
import com.student.model.Student;

@Service
public class StudentService {
	@Autowired
	StudentDaoImp studentDaoImp;

	public Student save(Student student) {
		return studentDaoImp.save(student);
	}

	public Student updateStudent(Student student) {
		try {
			this.studentDaoImp.updateStudent(student);

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("error occured studentDaoImp updateStudent ");
			return null;
		}
		return student;

	}

	public Student getStudent(int id) {
		try {
			return studentDaoImp.getStudent(id);
		} catch (Exception e) {
			System.out.println("error occured in studentservice getStudent");
			e.printStackTrace();
			return null;
		}

	}

	public List<Student> getAll() {
		try {
			return this.studentDaoImp.getAll();
		} catch (Exception e) {
			System.out.println("error occured in service getAll ");
			e.printStackTrace();
			return null;

		}
	}

	public int deleteById(int id) {
		return this.studentDaoImp.deleteById(id);
	}
}
