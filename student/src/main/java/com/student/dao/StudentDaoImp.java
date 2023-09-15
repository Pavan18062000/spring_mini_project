package com.student.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.student.mapper.StudentMapper;
import com.student.model.Student;
@Repository
public class StudentDaoImp implements StudentDao {

	@Autowired
	JdbcTemplate jdbcTemplate;
	@Override
	public Student save(Student student) {
		String sql="insert into spring.student(id,name,age,address) values(?,?,?,?)";
		int i=this.jdbcTemplate.update(sql,student.getId(),student.getName(),student.getAge(),student.getAddress());
		System.out.println(i+ " row inserted");
		return student;
	}
	@Override
	public Student updateStudent(Student student) {
		String sql="update spring.student set name=?,age=?,address=? where id=?";
		try {
			int i=this.jdbcTemplate.update(sql,student.getName(),student.getAge(),student.getAddress(),student.getId());
			System.out.println(i+" row inserted");
			
		}catch (Exception e) {
			e.printStackTrace();
			System.out.println("erroc occured in updateStudentImp");
			return null;
		}
		return student;
	}
	@Override
	public Student getStudent(int id) {
		String sql="select * from spring.student where id=?";
		List<Student> student = null;
		try {
			student=this.jdbcTemplate.query(sql, new StudentMapper(),id);
			
			
		} catch (Exception e) {
			System.out.println("error occured in studentDaoImp getStudent");
			e.printStackTrace();
		}
		return student.get(0);
	}
	@Override
	public List<Student> getAll() {
		String sql="select * from spring.student";
		List<Student> student=null;
		try{
			student=this.jdbcTemplate.query(sql,new StudentMapper());
			
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("error occured in StudentDaoImp getAll");
			
			// TODO: handle exception
		}
		return student;
	}
	@Override
	public int deleteById(int id) {
		String sql="delete from spring.student where id=?";
			return this.jdbcTemplate.update(sql,id);
	}
	
	

}
