CREATE TABLE `tolls` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(2048) NOT NULL DEFAULT '',
  `email` varchar(2048) NOT NULL DEFAULT '',
  `city` varchar(1024) NOT NULL DEFAULT '',
  `toll` int(11) NOT NULL,
  `total_toll` int(11) NOT NULL,
  `email_register_sent` int(11) NOT NULL DEFAULT '0',
  `email_finish_sent` int(11) NOT NULL DEFAULT '0',
  `ip` varchar(16) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;