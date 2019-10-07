CREATE TABLE `tolls` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(2048) NOT NULL DEFAULT '',
  `email` varchar(2048) NOT NULL DEFAULT '',
  `city` varchar(1024) NOT NULL DEFAULT '',
  `toll` int(11) NOT NULL,
  `total_toll` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;