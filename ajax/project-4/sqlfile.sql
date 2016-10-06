CREATE TABLE IF NOT EXISTS `user_info` ( 
`id` int(11) NOT NULL AUTO_INCREMENT, 
`full_name` varchar(100) NOT NULL, 
`email` varchar(50) NOT NULL, 
`phone_number` varchar(15) NOT NULL, 
`department` varchar(50) NOT NULL, 
`address` text NOT NULL, 
`password` varchar(100) NOT NULL, 
`status` int(11) NOT NULL, 
`insert_date_time` datetime NOT NULL, 
`update_date_time` datetime NOT NULL, 
PRIMARY KEY (`id`) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1