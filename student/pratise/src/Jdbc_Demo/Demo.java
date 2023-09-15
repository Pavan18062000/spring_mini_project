package Jdbc_Demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Demo {
	public static void main(String[] args) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String url="jdbc:mysql://localhost:3306/pratise_twenty?createDatabaseIfNotExist=true";
			String user="root";
			String password="root";
			Connection con = DriverManager.getConnection(url,user,password);
			
			
			//
//			Statement st= con.createStatement();
//			 ResultSet rs = st.executeQuery("select * from pratise_twenty.student");
//			 while(rs.next()) {
//				 
//				 System.out.println("id : "+rs.getInt(1)+" name : "+rs.getString(2)+" city : "+rs.getString(3));
//				 
//			 }
//		
//			con.close();
			
			
			PreparedStatement ps = con.prepareStatement("delete from student where id=1");
//			ps.setInt(1, 4);
//			ps.setString(2,"rohan");
//			ps.setString(3, "rajura");
			ps.execute();
			
			con.close();
			
			
		} catch (ClassNotFoundException | SQLException e) {
			
			e.printStackTrace();
		}
	}

}
